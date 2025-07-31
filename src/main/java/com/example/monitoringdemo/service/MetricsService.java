package com.example.monitoringdemo.service;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.Gauge;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class MetricsService {

    private final MeterRegistry meterRegistry;
    private final Counter errorCounter;
    private final Timer businessOperationTimer;
    private final AtomicInteger activeUsers = new AtomicInteger(0);
    private final AtomicLong totalOrderValue = new AtomicLong(0);

    @Autowired
    public MetricsService(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
        
        // Create custom counters
        this.errorCounter = Counter.builder("application.errors")
                .description("Total number of application errors")
                .register(meterRegistry);

        // Create custom timer
        this.businessOperationTimer = Timer.builder("business.operation.duration")
                .description("Time taken for business operations")
                .register(meterRegistry);

        // Create custom gauges
        Gauge.builder("active.users")
                .description("Number of active users")
                .register(meterRegistry, activeUsers, AtomicInteger::get);

        Gauge.builder("total.order.value")
                .description("Total value of all orders")
                .register(meterRegistry, totalOrderValue, AtomicLong::get);
    }

    public void incrementErrorCounter(String errorType) {
        Counter.builder("application.errors")
                .tag("type", errorType)
                .register(meterRegistry)
                .increment();
    }

    public void recordBusinessOperation(Runnable operation) {
        Timer.Sample sample = Timer.start(meterRegistry);
        try {
            operation.run();
        } finally {
            sample.stop(businessOperationTimer);
        }
    }

    public void setActiveUsers(int count) {
        activeUsers.set(count);
    }

    public void recordOrderValue(double value) {
        totalOrderValue.addAndGet((long) value);
        
        // Also record as a distribution summary
        meterRegistry.summary("order.value.distribution")
                .record(value);
    }

    public void incrementActiveUsers() {
        activeUsers.incrementAndGet();
    }

    public void decrementActiveUsers() {
        activeUsers.decrementAndGet();
    }
}
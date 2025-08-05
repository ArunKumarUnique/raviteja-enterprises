import React, { useState, useEffect, useRef } from 'react';
import { Wifi, WifiOff, Play, Square, Trash2 } from 'lucide-react';

interface WebSocketMessage {
  id: string;
  timestamp: string;
  data: any;
  type: string;
}

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);
  const [serverUrl, setServerUrl] = useState('ws://localhost:8080/websocket');
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const websocketRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const connectWebSocket = () => {
    if (isConnected || isConnecting) return;

    setIsConnecting(true);
    setConnectionStatus('Connecting...');

    try {
      const ws = new WebSocket(serverUrl);
      websocketRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        setIsConnecting(false);
        setConnectionStatus('Connected');
        console.log('WebSocket connected');
        
        // Add connection success message
        const connectMessage: WebSocketMessage = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          data: { message: 'WebSocket connection established' },
          type: 'CONNECTION'
        };
        setMessages(prev => [...prev, connectMessage]);
      };

      ws.onmessage = (event) => {
        console.log('Received message:', event.data);
        
        try {
          const parsedData = JSON.parse(event.data);
          const message: WebSocketMessage = {
            id: Date.now().toString() + Math.random(),
            timestamp: new Date().toISOString(),
            data: parsedData,
            type: parsedData.type || 'MESSAGE'
          };
          setMessages(prev => [...prev, message]);
        } catch (error) {
          // Handle plain text messages
          const message: WebSocketMessage = {
            id: Date.now().toString() + Math.random(),
            timestamp: new Date().toISOString(),
            data: { message: event.data },
            type: 'TEXT'
          };
          setMessages(prev => [...prev, message]);
        }
      };

      ws.onclose = (event) => {
        setIsConnected(false);
        setIsConnecting(false);
        setConnectionStatus(`Disconnected (Code: ${event.code})`);
        console.log('WebSocket disconnected:', event.code, event.reason);
        
        const disconnectMessage: WebSocketMessage = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          data: { 
            message: `Connection closed (Code: ${event.code})`,
            reason: event.reason || 'Unknown reason'
          },
          type: 'DISCONNECTION'
        };
        setMessages(prev => [...prev, disconnectMessage]);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setIsConnecting(false);
        setConnectionStatus('Connection Error');
        
        const errorMessage: WebSocketMessage = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          data: { message: 'WebSocket connection error', error: error.toString() },
          type: 'ERROR'
        };
        setMessages(prev => [...prev, errorMessage]);
      };

    } catch (error) {
      setIsConnecting(false);
      setConnectionStatus('Connection Failed');
      console.error('Failed to create WebSocket:', error);
    }
  };

  const disconnectWebSocket = () => {
    if (websocketRef.current) {
      websocketRef.current.close();
      websocketRef.current = null;
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const sendTestMessage = () => {
    if (websocketRef.current && isConnected) {
      const testMessage = {
        type: 'TEST',
        message: 'Hello from client',
        timestamp: new Date().toISOString()
      };
      websocketRef.current.send(JSON.stringify(testMessage));
    }
  };

  const getStatusColor = () => {
    if (isConnected) return 'text-green-600';
    if (isConnecting) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMessageTypeColor = (type: string) => {
    switch (type) {
      case 'CONNECTION': return 'bg-green-100 text-green-800';
      case 'DISCONNECTION': return 'bg-red-100 text-red-800';
      case 'ERROR': return 'bg-red-100 text-red-800';
      case 'TEST': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold flex items-center">
              <Wifi className="mr-3" size={28} />
              WebSocket Client Demo
            </h1>
            <p className="text-blue-100 mt-2">
              Connect to your Spring Boot WebSocket server and monitor real-time events
            </p>
          </div>

          {/* Connection Controls */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WebSocket Server URL
                </label>
                <input
                  type="text"
                  value={serverUrl}
                  onChange={(e) => setServerUrl(e.target.value)}
                  disabled={isConnected || isConnecting}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="ws://localhost:8080/websocket"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={connectWebSocket}
                  disabled={isConnected || isConnecting}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <Play size={16} className="mr-2" />
                  {isConnecting ? 'Connecting...' : 'Connect'}
                </button>
                
                <button
                  onClick={disconnectWebSocket}
                  disabled={!isConnected}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <Square size={16} className="mr-2" />
                  Disconnect
                </button>

                {isConnected && (
                  <button
                    onClick={sendTestMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  >
                    Send Test
                  </button>
                )}
              </div>
            </div>

            {/* Status */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                {isConnected ? (
                  <Wifi className="text-green-600 mr-2" size={20} />
                ) : (
                  <WifiOff className="text-red-600 mr-2" size={20} />
                )}
                <span className={`font-medium ${getStatusColor()}`}>
                  Status: {connectionStatus}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Messages: {messages.length}
                </span>
                <button
                  onClick={clearMessages}
                  className="text-sm text-red-600 hover:text-red-800 flex items-center"
                >
                  <Trash2 size={14} className="mr-1" />
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Real-time Events
            </h2>
            
            <div className="bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm">
              {messages.length === 0 ? (
                <div className="text-gray-500 text-center py-8">
                  No messages yet. Connect to start receiving events.
                </div>
              ) : (
                <div className="space-y-2">
                  {messages.map((message) => (
                    <div key={message.id} className="text-green-400">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 text-xs">
                          [{new Date(message.timestamp).toLocaleTimeString()}]
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getMessageTypeColor(message.type)}`}>
                          {message.type}
                        </span>
                      </div>
                      <div className="mt-1 pl-4 text-white">
                        <pre className="whitespace-pre-wrap break-words">
                          {JSON.stringify(message.data, null, 2)}
                        </pre>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <h3 className="text-md font-semibold text-gray-900 mb-2">
              Instructions:
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Make sure your Spring Boot WebSocket server is running</li>
              <li>• Update the server URL if needed (default: ws://localhost:8080/websocket)</li>
              <li>• Click "Connect" to establish WebSocket connection</li>
              <li>• All incoming messages will be displayed in real-time</li>
              <li>• Use "Send Test" to send a test message to the server</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
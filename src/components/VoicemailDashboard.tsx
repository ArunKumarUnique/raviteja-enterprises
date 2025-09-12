import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Calendar, 
  FileText, 
  CheckSquare, 
  Phone, 
  Clock, 
  User,
  Filter,
  Search,
  Download,
  Trash2,
  MoreVertical
} from 'lucide-react';

interface Voicemail {
  id: string;
  leadName: string;
  leadPhone: string;
  duration: string;
  timestamp: string;
  isNew: boolean;
  transcription?: string;
  audioUrl?: string;
}

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  voicemail: Voicemail | null;
  actionType: 'task' | 'note' | 'appointment' | null;
}

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose, voicemail, actionType }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    appointmentDate: '',
    appointmentTime: ''
  });

  if (!isOpen || !voicemail || !actionType) return null;

  const getModalTitle = () => {
    switch (actionType) {
      case 'task': return 'Create Task';
      case 'note': return 'Add Note';
      case 'appointment': return 'Schedule Appointment';
      default: return '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitting:', actionType, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{getModalTitle()}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ×
          </button>
        </div>

        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Related to voicemail from:</p>
          <p className="font-medium">{voicemail.leadName}</p>
          <p className="text-sm text-gray-500">{voicemail.leadPhone}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {actionType === 'appointment' ? 'Appointment Title' : 'Title'}
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {actionType === 'task' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </>
          )}

          {actionType === 'appointment' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.appointmentDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, appointmentDate: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  value={formData.appointmentTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, appointmentTime: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Create {actionType === 'appointment' ? 'Appointment' : actionType === 'task' ? 'Task' : 'Note'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const VoicemailDashboard: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedVoicemail, setSelectedVoicemail] = useState<Voicemail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState<'task' | 'note' | 'appointment' | null>(null);

  // Mock data
  const voicemails: Voicemail[] = [
    {
      id: '1',
      leadName: 'John Smith',
      leadPhone: '+1 (555) 123-4567',
      duration: '2:34',
      timestamp: '2024-01-15T10:30:00Z',
      isNew: true,
      transcription: 'Hi, I\'m interested in your loan services. Could you please call me back to discuss the rates and terms? Thank you.'
    },
    {
      id: '2',
      leadName: 'Sarah Johnson',
      leadPhone: '+1 (555) 987-6543',
      duration: '1:45',
      timestamp: '2024-01-15T09:15:00Z',
      isNew: true,
      transcription: 'Hello, I received your information about refinancing. I have some questions about the process.'
    },
    {
      id: '3',
      leadName: 'Mike Davis',
      leadPhone: '+1 (555) 456-7890',
      duration: '3:12',
      timestamp: '2024-01-14T16:45:00Z',
      isNew: false,
      transcription: 'I\'m looking to purchase a new home and need information about mortgage options. Please call me back at your earliest convenience.'
    },
    {
      id: '4',
      leadName: 'Emily Wilson',
      leadPhone: '+1 (555) 321-0987',
      duration: '0:58',
      timestamp: '2024-01-14T14:20:00Z',
      isNew: false,
      transcription: 'Quick question about the application process. Thanks!'
    }
  ];

  const filteredVoicemails = voicemails.filter(vm => {
    const matchesSearch = vm.leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vm.leadPhone.includes(searchTerm);
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'new' && vm.isNew) ||
                         (filterStatus === 'played' && !vm.isNew);
    return matchesSearch && matchesFilter;
  });

  const handlePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      // Simulate audio playback
      setTimeout(() => setPlayingId(null), 3000);
    }
  };

  const handleAction = (voicemail: Voicemail, type: 'task' | 'note' | 'appointment') => {
    setSelectedVoicemail(voicemail);
    setActionType(type);
    setModalOpen(true);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Voicemail Dashboard</h1>
          <p className="text-gray-600">Manage all voicemails from your leads</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            {voicemails.filter(vm => vm.isNew).length} New
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {voicemails.length} Total
          </span>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Voicemails</option>
                <option value="new">New Only</option>
                <option value="played">Played Only</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Voicemail List */}
      <div className="space-y-4">
        {filteredVoicemails.map((voicemail) => (
          <div
            key={voicemail.id}
            className={`bg-white rounded-lg shadow-sm border ${
              voicemail.isNew ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
            } p-6`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                {/* Play Button */}
                <button
                  onClick={() => handlePlay(voicemail.id)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    playingId === voicemail.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {playingId === voicemail.id ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>

                {/* Voicemail Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold text-gray-900">{voicemail.leadName}</span>
                    </div>
                    {voicemail.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{voicemail.leadPhone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{voicemail.duration}</span>
                    </div>
                    <span>{formatTimestamp(voicemail.timestamp)}</span>
                  </div>

                  {voicemail.transcription && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-700 italic">"{voicemail.transcription}"</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleAction(voicemail, 'task')}
                      className="flex items-center px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <CheckSquare className="w-4 h-4 mr-2" />
                      Create Task
                    </button>
                    <button
                      onClick={() => handleAction(voicemail, 'note')}
                      className="flex items-center px-3 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Add Note
                    </button>
                    <button
                      onClick={() => handleAction(voicemail, 'appointment')}
                      className="flex items-center px-3 py-2 text-sm font-medium text-purple-700 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </button>
                  </div>
                </div>
              </div>

              {/* More Actions */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVoicemails.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No voicemails found</h3>
          <p className="text-gray-600">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Voicemails from your leads will appear here.'}
          </p>
        </div>
      )}

      {/* Action Modal */}
      <ActionModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedVoicemail(null);
          setActionType(null);
        }}
        voicemail={selectedVoicemail}
        actionType={actionType}
      />
    </div>
  );
};

export default VoicemailDashboard;
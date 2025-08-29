import React from 'react';
import { UserPlus, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const Invited: React.FC = () => {
  const invitations = [
    {
      id: 1,
      companyName: 'Hotel Paradise Resort',
      inviterName: 'Sarah Johnson',
      inviterRole: 'Procurement Manager',
      invitedDate: '2024-01-15',
      status: 'pending',
      message: 'We would like to invite you to participate in our supplier network for premium hospitality supplies.'
    },
    {
      id: 2,
      companyName: 'Restaurant Chain ABC',
      inviterName: 'Mike Chen',
      inviterRole: 'Supply Chain Director',
      invitedDate: '2024-01-12',
      status: 'accepted',
      message: 'Join our preferred supplier program for fresh ingredients and kitchen equipment.'
    },
    {
      id: 3,
      companyName: 'Boutique Hotel Group',
      inviterName: 'Emma Wilson',
      inviterRole: 'Operations Manager',
      invitedDate: '2024-01-10',
      status: 'declined',
      message: 'We are looking for luxury amenity suppliers for our hotel chain.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'accepted':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'declined':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Invitations</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your supplier network invitations</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <UserPlus className="w-4 h-4" />
          <span>{invitations.filter(inv => inv.status === 'pending').length} pending</span>
        </div>
      </div>

      {/* Invitations List */}
      <div className="space-y-4">
        {invitations.map((invitation) => (
          <div key={invitation.id} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserPlus className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900">{invitation.companyName}</h3>
                    <p className="text-sm text-gray-600">
                      Invited by {invitation.inviterName} • {invitation.inviterRole}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{invitation.invitedDate}</span>
                      {getStatusIcon(invitation.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invitation.status)}`}>
                        {invitation.status.charAt(0).toUpperCase() + invitation.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-4 ml-13">{invitation.message}</p>
              </div>
              
              {invitation.status === 'pending' && (
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:ml-4">
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                    Accept
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                    Decline
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {invitations.length === 0 && (
        <div className="text-center py-12">
          <UserPlus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No invitations yet</h3>
          <p className="text-gray-600">You'll see supplier network invitations here when you receive them.</p>
        </div>
      )}
    </div>
  );
};

export default Invited;
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  status: 'completed' | 'pending' | 'failed';
}

const activities: Activity[] = [
  {
    id: '1',
    user: 'John Doe',
    action: 'Created new project',
    time: '2 minutes ago',
    status: 'completed',
  },
  {
    id: '2',
    user: 'Jane Smith',
    action: 'Updated user settings',
    time: '5 minutes ago',
    status: 'completed',
  },
  {
    id: '3',
    user: 'Mike Johnson',
    action: 'Deleted old files',
    time: '10 minutes ago',
    status: 'completed',
  },
  {
    id: '4',
    user: 'Sarah Wilson',
    action: 'Uploaded new documents',
    time: '15 minutes ago',
    status: 'pending',
  },
  {
    id: '5',
    user: 'Tom Brown',
    action: 'Failed to sync data',
    time: '20 minutes ago',
    status: 'failed',
  },
];

function getStatusColor(status: Activity['status']) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'failed':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
  }
}

export function RecentActivity() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-primary-foreground">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{activity.user}</p>
                  <p className="text-sm text-muted-foreground truncate">{activity.action}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 
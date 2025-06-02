'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchUser, selectUser, selectUserStatus } from '@/redux/features/userSlice';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { StatusMessage } from '@/components/ui/status-message';
import { UserProfileCard } from '@/components/user/user-profile-card';

export default function ProfilePage(): React.ReactElement {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h1>

      {status === 'loading' && <LoadingSpinner />}

      {status === 'failed' && (
        <StatusMessage 
          type="error" 
          message="Failed to load user profile. Please try again later." 
        />
      )}

      {status === 'succeeded' && user && <UserProfileCard user={user} />}
    </div>
  );
}

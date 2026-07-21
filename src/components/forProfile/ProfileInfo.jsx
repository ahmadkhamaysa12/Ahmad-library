import useProfile from '@/hooks/useProfile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfileInfo() {
  const { data: profile, isLoading, error } = useProfile();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile</p>;
  }
console.log(profile);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Profile Information</h1>

      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div>
            <span className="font-semibold">Name:</span> {profile?.fullName}
          </div>

          <div>
            <span className="font-semibold">Email:</span> {profile?.email}
          </div>

          <div>
            <span className="font-semibold">Phone:</span> {profile?.phoneNumber}
          </div>

          <div>
            <span className="font-semibold">City:</span>{' '}
            {profile?.city || 'Not provided'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

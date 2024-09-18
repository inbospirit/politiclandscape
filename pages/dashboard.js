import { useSelector } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute';

export default function DashboardPage() {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated ?? false);
  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <h2>Dashboard (Protected)</h2>
    </ProtectedRoute>
  );
}

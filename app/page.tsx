import { redirect } from 'next/navigation';

export default function Login() {
  // Since you don't need landing page, redirect to dashboard
  redirect('/home');
}

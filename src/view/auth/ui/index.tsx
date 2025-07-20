import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  pathname: "login" | "register"
}

export const AuthPage: React.FC<Props> = ({ pathname }) => {
  return (
    <div >
      {pathname}
    </div>
  );
};
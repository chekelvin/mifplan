import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface SummaryCardProps {
  title: string;
  engTitle: string;
  icon: LucideIcon;
  description: string;
  detail: string;
  color: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
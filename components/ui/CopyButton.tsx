// components/CopyButton.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
    text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <Button variant="default" size="sm" onClick={copyToClipboard}>
            Copy
        </Button>
    );
};

export default CopyButton;

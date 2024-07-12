import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import React from 'react';
import { TEMPLATE } from '../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import TemplateCard from '../_components/TemplateCard';

// Dynamically import the client-side CopyButton component
const CopyButton = dynamic(() => import('../_components/CopyButton'), { ssr: false });

export interface HISTORY {
    id: Number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string
}

const History = async () => {
    const user = await currentUser();

    //   @ts-ignore
    const HistoryList: HISTORY[] = await db.select().from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.id));

    const GetTemplate = (slug: string) => {
        const template: TEMPLATE | any = Templates?.find((item) => item.slug === slug);
        return template || { name: 'Unknown Template', icon: '' };
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    }

    return (
        <div className='m-5 p-5 border rounded-lg bg-white gap-3'>
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>Search your previously generated AI content</p>
            <div className='mt-5'>
                <div className='grid grid-cols-5 gap-4 font-bold'>
                    <div>Templates</div>
                    <div>AiResp</div>
                    <div>Date</div>
                    <div>Words</div>
                    <div>Copy</div>
                </div>
                {HistoryList.map((history) => {
                    const template = GetTemplate(history.templateSlug);
                    return (
                        <div key={history.id.toString()} className='grid grid-cols-5 gap-4 mt-2 p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image src={template.icon} alt='icon' width={40} height={30} />
                                {template.name}
                            </div>
                            <div className='line-clamp-3'>{history.aiResponse}</div>
                            <div>{new Date(history.createdAt).toLocaleDateString()}</div>
                            <div>{history.aiResponse.split(' ').length}</div>
                            <div>
                            <CopyButton text={history.aiResponse} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default History;

"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContent';

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  useEffect(() => {
    if (user && user.primaryEmailAddress?.emailAddress) {
      GetData(user.primaryEmailAddress.emailAddress);
    }
  }, [user]);

  const GetData = async (email: string) => {
    try {
      // Explicitly asserting the type of `createdBy` to ensure compatibility
      const result: HISTORY[] = await db.select().from(AIOutput)
        .where(eq(AIOutput.createdBy as unknown as any, email));

      GetTotalUsage(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total = 0;
    result.forEach(element => {
      total += Number(element.aiResponse.split(' ')?.length);
    });

    setTotalUsage(total);
    console.log(total);
  };

  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-lg mt-3'>
          <div className='h-2 bg-white rounded-full'
            style={{
              width: (totalUsage / 10000) * 100 + "%"
            }}></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/10,000 credit used</h2>
      </div>
      <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  );
}

export default UsageTrack;

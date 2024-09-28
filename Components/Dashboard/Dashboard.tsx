import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import Chart from './Chart';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const statCards = [
    { title: 'Total Projects', value: '100+' },
    { title: 'in Progress', value: '50' },
    { title: 'Complete', value: '40' },
  ];

  return (
    <div className="flex flex-col bg-white">
      <div className="pb-7 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <main className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-9 max-md:mt-10 max-md:max-w-full">
              <Header />
              <div className="mt-24 max-w-full w-[839px] max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col">
                  {statCards.map((card, index) => (
                    <StatCard key={index} title={card.title} value={card.value} />
                  ))}
                </div>
              </div>
              <Chart />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
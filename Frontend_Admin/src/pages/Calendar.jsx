import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Static calendar data - can be made dynamic later
    const currentMonth = "October";
    const currentYear = 2024;

    // Example events - can be fetched from API later
    const events = {
        5: [
            { title: "Live Jazz Night", time: "7:00 PM", type: "entertainment" }
        ],
        12: [
            { title: "Wine Tasting Event", time: "6:00 PM", type: "special" },
            { title: "Chef's Special Menu", time: "5:00 PM - 10:00 PM", type: "menu" }
        ],
        18: [
            { title: "Private Dining Available", time: "All Day", type: "private" }
        ],
        22: [
            { title: "Wagyu Beef Showcase", time: "7:30 PM", type: "special" }
        ],
        26: [
            { title: "Halloween Special Menu", time: "5:00 PM - 11:00 PM", type: "menu" }
        ],
        31: [
            { title: "Halloween Celebration", time: "6:00 PM", type: "entertainment" }
        ]
    };

    // Generate calendar days (static for October 2024)
    const daysInMonth = 31;
    const firstDayOfMonth = 2; // October 1, 2024 is a Tuesday (0 = Sunday)
    const days = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    const getEventType = (day) => {
        if (!events[day]) return null;
        return events[day][0].type;
    };

    const eventTypeColors = {
        entertainment: "bg-purple-500/20 border-purple-500",
        special: "bg-[#b8812e]/20 border-[#b8812e]",
        menu: "bg-[#8b2e22]/20 border-[#8b2e22]",
        private: "bg-blue-500/20 border-blue-500"
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <main className="flex-grow pt-20 md:pt-24">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-b from-[#1a1410] to-[#0a0a0a] py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="w-20 h-1 bg-[#b8812e] mx-auto mb-6" />

                        <p className="text-[#b8812e] text-sm md:text-base font-light tracking-[0.4em] uppercase mb-4">
                            EVENTS & SCHEDULE
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 tracking-wider text-white"
                            style={{ fontFamily: 'Georgia, serif' }}>
                            Calendar
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                            Stay updated with our special events, wine tastings, and exclusive dining experiences
                        </p>
                    </div>
                </section>

                {/* Calendar Section */}
                <section className="relative py-12 md:py-16 bg-[#0a0a0a]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Calendar */}
                            <div className="lg:col-span-2">
                                <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg p-6 md:p-8">
                                    {/* Calendar Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
                                            <svg className="w-6 h-6 text-gray-400 group-hover:text-[#b8812e] transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                                            {currentMonth} {currentYear}
                                        </h2>

                                        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
                                            <svg className="w-6 h-6 text-gray-400 group-hover:text-[#b8812e] transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Day Labels */}
                                    <div className="grid grid-cols-7 gap-2 mb-4">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                            <div key={day} className="text-center text-sm font-semibold text-[#b8812e] py-2">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-2">
                                        {days.map((day, index) => {
                                            const hasEvent = day && events[day];
                                            const eventType = day && getEventType(day);
                                            const isSelected = selectedDate === day;

                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => day && setSelectedDate(day)}
                                                    className={`
                                                        aspect-square flex flex-col items-center justify-center
                                                        rounded-lg transition-all duration-300 cursor-pointer
                                                        ${day ? 'hover:bg-white/10' : ''}
                                                        ${isSelected ? 'bg-[#8b2e22] border-2 border-[#b8812e]' : ''}
                                                        ${hasEvent && !isSelected ? `border-2 ${eventTypeColors[eventType]}` : 'border border-white/5'}
                                                    `}
                                                >
                                                    {day && (
                                                        <>
                                                            <span className={`text-sm md:text-base font-semibold ${isSelected ? 'text-white' : 'text-gray-300'
                                                                }`}>
                                                                {day}
                                                            </span>
                                                            {hasEvent && (
                                                                <div className="flex space-x-1 mt-1">
                                                                    {events[day].map((_, i) => (
                                                                        <div
                                                                            key={i}
                                                                            className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-[#b8812e]'
                                                                                }`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Events Sidebar */}
                            <div className="space-y-6">
                                {/* Legend */}
                                <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-white mb-4">Event Types</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-4 h-4 rounded border-2 border-[#b8812e] bg-[#b8812e]/20"></div>
                                            <span className="text-sm text-gray-300">Special Events</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-4 h-4 rounded border-2 border-[#8b2e22] bg-[#8b2e22]/20"></div>
                                            <span className="text-sm text-gray-300">Menu Specials</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-4 h-4 rounded border-2 border-purple-500 bg-purple-500/20"></div>
                                            <span className="text-sm text-gray-300">Entertainment</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-4 h-4 rounded border-2 border-blue-500 bg-blue-500/20"></div>
                                            <span className="text-sm text-gray-300">Private Dining</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Selected Date Events */}
                                {selectedDate && events[selectedDate] && (
                                    <div className="bg-gradient-to-b from-white/5 to-transparent border border-[#b8812e] rounded-lg p-6 animate-fadeIn">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-white">
                                                {currentMonth} {selectedDate}
                                            </h3>
                                            <button
                                                onClick={() => setSelectedDate(null)}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            {events[selectedDate].map((event, index) => (
                                                <div key={index} className="border-l-4 border-[#b8812e] pl-4">
                                                    <h4 className="text-white font-semibold mb-1">{event.title}</h4>
                                                    <div className="flex items-center text-sm text-gray-400">
                                                        <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {event.time}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Upcoming Events */}
                                {!selectedDate && (
                                    <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-white mb-4">Upcoming Events</h3>
                                        <div className="space-y-4">
                                            {Object.entries(events).slice(0, 3).map(([day, dayEvents]) => (
                                                <div
                                                    key={day}
                                                    onClick={() => setSelectedDate(parseInt(day))}
                                                    className="border-l-4 border-[#b8812e] pl-4 cursor-pointer hover:bg-white/5 
                                                                transition-all duration-300 rounded-r py-2 pr-2"
                                                >
                                                    <p className="text-[#b8812e] text-sm font-semibold mb-1">
                                                        {currentMonth} {day}
                                                    </p>
                                                    <h4 className="text-white font-semibold text-sm">{dayEvents[0].title}</h4>
                                                    <p className="text-xs text-gray-400">{dayEvents[0].time}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out both;
                }
            `}</style>
        </div>
    );
};

export default CalendarPage;
/* Past events: horizontal photo-card scroller.
   Used on the home Proof section and the Events page. */

const EVENTS = [
  {
    img: '/events pics/DELTA EXPO IIT MADRAS.png',
    meta: '01 · Platform Partner · Offline',
    title: 'IIT Madras Delta Expo',
    copy: 'Our first major collaboration. Ran Investment Arena — attendees received virtual cash to invest in startups, evaluating them like real investors.',
    stat: '5,000 footfall · 3,000 day-one signups',
  },
  {
    img: '/events pics/BITSPILANI LAUNCHPAD.jpeg',
    meta: '02 · Platform Partner · Offline',
    title: 'BITS Pilani Hyderabad eSummit',
    copy: 'Investment Arena, internship drives with AI-powered interviews, and Pitchers Pilot — a Shark Tank-style format judged by a five-evaluator panel.',
    stat: '500 paid users · 1,200 onboardings',
  },
  {
    img: '/events pics/Bangalore Event.png',
    meta: '03 · With Aman Sharma · Offline',
    title: 'Bengaluru Founder Meetup',
    copy: 'A curated, high-trust networking room of founders, professionals and ecosystem participants — quality over scale.',
    stat: 'Close to 100 founders & operators',
  },
  {
    img: '/events pics/Woman founders rountable (womans day special).png',
    meta: '04 · Ments Original · Virtual',
    title: 'Women Founders Roundtable',
    copy: '"She Leads, She Builds" — a Women’s Day special where women founders across fintech, climate-tech and healthcare shared stories, success and strategies.',
    stat: 'Online · Women’s Day Special',
  },
  {
    img: '/events pics/sept-virtual-pitching.jpeg',
    meta: '05 · Ments Original · Virtual',
    title: 'Small Business, Big Impact',
    copy: 'A virtual Ments pitch competition where small-business founders pitched live to a panel of angel and strategic investors.',
    stat: 'Online · Pitch Competition',
  },
];

export default function PastEventsScroller() {
  return (
    <div className="past-grid">
      {EVENTS.map((event, i) => (
        <div key={i} className="past-card scroll-anim">
          <img className="past-img" src={event.img} alt={event.title} loading="lazy" />
          <div className="past-meta">{event.meta}</div>
          <h3 className="past-title">{event.title}</h3>
          <p>{event.copy}</p>
          <span className="past-stat">{event.stat}</span>
        </div>
      ))}
    </div>
  );
}

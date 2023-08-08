import images from './images';
import icons from './icons';
import {COLORS} from './theme';

const EventAcceptList = [
  {
    id: 0,
    title: 'Team Meet',
    time: '10:00 AM- 11:00 AM',
    bg: '#D3D3F0',
    border: COLORS.primary,
    date: 12,
    day: 'Wed',
  },
  {
    id: 1,
    title: 'Application Meet',
    time: '10:00 AM- 11:00 AM',
    bg: '#FEC4B6',
    border: '#DD846F',
    date: 12,
    day: 'Wed',
  },
  {
    id: 2,
    title: 'Product meet',
    time: '10:00 AM- 11:00 AM',
    bg: '#9BE3E8',
    border: '#85B5B8',
    date: 12,
    day: 'Wed',
  },
  {
    id: 3,
    title: 'Team Meet',
    time: '10:00 AM- 11:00 AM',
    bg: '#FFE99C',
    border: '#FFD133',
    date: 12,
    day: 'Wed',
  },
];
//   reson, date, title, status,
const LeaveDetailCartList = [
  {
    id: 0,
    title: 'Half day leave',
    date: '16 jan-18 jan',
    reson: 'Sick',
    dateMonth: 'January 2022',
    status: 'Approved',
  },
  {
    id: 1,
    title: 'Half day leave',
    date: '16 jan-18 jan',
    reson: 'Sick',
    dateMonth: 'Febrary 2022',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Half day leave',
    date: '16 jan-18 jan',
    reson: 'Sick',
    dateMonth: 'Jane 2022',
    status: 'Rejected',
  },
  {
    id: 3,
    title: 'Half day leave',
    date: '16 jan-18 jan',
    reson: 'Sick',
    dateMonth: 'January 2022',
    status: 'Approved',
  },
  {
    id: 4,
    title: 'Half day leave',
    date: '16 jan-18 jan',
    reson: 'Sick',
    dateMonth: 'april 2022',
    status: 'Rejected',
  },
];

const HolidayCartList = [
  {
    id: 0,
    title: 'Onam',
    date: '00/00/0000',
    reson: 'Gvt holiday',
    icon: icons.nineteen,
  },
  {
    id: 1,
    title: 'Navratri',
    date: '01/02/2000',
    reson: 'holiday',
    icon: icons.offer,
  },
  {
    id: 2,
    title: 'Onam',
    date: '00/00/0000',
    reson: 'Otp holiday',
    icon: icons.nineteen,
  },
];

const HomeHolidayViewAllCartList = [
  {
    id: 0,
    date: '3/09/2022',
    day: 'wed',
    reson: 'Ganesh Chaturti',
  },
  {
    id: 1,
    date: '3/09/2022',
    day: 'thusday',
    reson: 'Onam',
  },
];
const OverviewDate = [
  {
    id: 0,
    date: '18',
    title: 'Present',
  },
  {
    id: 1,
    date: '03',
    title: 'Absent',
  },
  {
    id: 2,
    date: '01',
    title: 'Leave',
  },
];
const yearList = [
  {value: '1', label: '2022'},
  {value: '2', label: '2023'},
  {value: '3', label: '2024'},
  {value: '4', label: '2025'},
  {value: '5', label: '2026'},
  {value: '6', label: '2027'},
  {value: '7', label: '2028'},
];

const SelectleaveList = [
  {value: '1', label: 'Sick Leave'},
  {value: '2', label: 'Casual Leave'},
  {value: '3', label: 'Earned Leave'},
  {value: '4', label: 'Earned Leave'},
];

const WorkTrakCartList = [
  {
    id: 0,
    projectname: 'Landing ',
    Assigned: 'Priti jani',
    report: 'Radha Krishna',
    status: 'Pending',
  },
  {
    id: 1,
    projectname: 'Landing Bus prject',
    Assigned: 'Pritam kumar',
    report: 'Radha Krishna',
    status: 'In-progress',
  },
  {
    id: 2,
    projectname: 'Landing Page Project',
    Assigned: 'rajkumari jani',
    report: 'RadhaRani Krishna',
    status: 'Pending',
  },
];

const Chating = [
  {
    id: 0,
    image: images.glogo,
    direction: 'left',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
  },
  {
    id: 1,
    image: images.img2,
    direction: 'right',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
  },
  {
    id: 2,
    image: images.banner,
    direction: 'left',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    image: images.glogo,
    direction: 'right',
    content: 'dolor sit amet, consectetur adipiscing el',
  },
  {
    id: 4,
    image: images.img1,
    direction: 'left',
    content: 'dolor sit amet, consectetur adipiscing el',
  },
  {
    id: 5,
    image: images.glogo,
    direction: 'right',
    content: 'dolor sit amet, consectetur adipiscing el',
  },
];

const CheckInOutCartList = [
  {
    id: 0,
    date: '12',
    day: 'Sat',
    checkin: '00:00AM',
    checkout: '00:00AM',
    title: 'Hrs',
    value: '60',
  },
  {
    id: 1,
    date: '22',
    day: 'fri',
    checkin: '01:00AM',
    checkout: '00:00AM',
    title: 'Hrs',
    value: '80',
  },
  {
    id: 2,
    date: '11',
    day: 'wed',
    checkin: '01:00AM',
    checkout: '20:00AM',
    title: 'Hrs',
    value: '80',
  },
  {
    id: 3,
    date: '20',
    day: 'thu',
    checkin: '01:00AM',
    checkout: '20:00AM',
    title: 'Hrs',
    value: '60',
  },
  {
    id: 4,
    date: '12',
    day: 'fri',
    checkin: '01:00AM',
    checkout: '20:00AM',
    title: 'Hrs',
    value: '70',
  },
  {
    id: 5,
    date: '02',
    day: 'mon',
    checkin: '01:00AM',
    checkout: '20:00AM',
    title: 'Hrs',
    value: '80',
  },
];
export default {
  EventAcceptList,
  LeaveDetailCartList,
  HolidayCartList,
  HomeHolidayViewAllCartList,
  OverviewDate,
  yearList,
  SelectleaveList,
  WorkTrakCartList,
  Chating,
  CheckInOutCartList,
};

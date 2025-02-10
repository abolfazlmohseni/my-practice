const convertSchedule = (schedule) => {
    return schedule.map(item => {
        let [startTime, endTime] = item.time.split(" - ");
        
        // بررسی اینکه اگر زمان دارای فاصله یا مقادیر اشتباه باشه، درست پردازش بشه
        // const timeToNumber = (time) => {
          
        //     time = time.replace(":", "").trim();
        
         
        // }

        // در صورتی که تایم درست نباشه، هشدار میده
        if (!startTime || !endTime) {
            console.warn(`Invalid time format for entry:`, item);
        }

        return {
            day: item.day,
            startTime: startTime,
            endTime: endTime,
            activity: item.activity
        };
    });
};

// ورودی داده‌ها
const inputSchedule = [
    { day: 'شنبه', time: '۱۵:۳۰ - ۱۶:۰۰', activity: 'ریاضی (حل تمرین و مسائل)' },
    { day: 'شنبه', time: '۱۶:۰۰ - ۱۶:۳۰', activity: 'استراحت' },
    { day: 'شنبه', time: '۱۶:۳۰ - ۱۷:۳۰', activity: 'فیزیک (مطالعه مفاهیم و تمرین)' },
    { day: 'شنبه', time: '۱۷:۳۰ - ۱۸:۰۰', activity: 'استراحت' },
    { day: 'شنبه', time: '۱۸:۰۰ - ۱۹:۰۰', activity: 'شیمی (تمرین و تست)' },
    { day: 'شنبه', time: '۱۹:۰۰ - ۱۹:۳۰', activity: 'استراحت' },
    { day: 'شنبه', time: '۱۹:۳۰ - ۲۰:۰۰', activity: 'ریاضی (تمرین مسائل پیچیده)' },
    { day: 'یکشنبه', time: '۱۵:۳۰ - ۱۶:۰۰', activity: 'ریاضی (حل تمرین و مسائل جدید)' },
    { day: 'یکشنبه', time: '۱۶:۰۰ - ۱۶:۳۰', activity: 'استراحت' },
    { day: 'یکشنبه', time: '۱۶:۳۰ - ۱۷:۳۰', activity: 'هندسه (تمرین و تست)' },
    { day: 'یکشنبه', time: '۱۷:۳۰ - ۱۸:۰۰', activity: 'استراحت' },
    { day: 'یکشنبه', time: '۱۸:۰۰ - ۱۹:۰۰', activity: 'فیزیک (مرور مفاهیم)' },
    { day: 'دوشنبه', time: '۱۵:۳۰ - ۱۶:۰۰', activity: 'شیمی (تمرین تستی)' },
    { day: 'دوشنبه', time: '۱۶:۰۰ - ۱۶:۳۰', activity: 'استراحت' },
    { day: 'دوشنبه', time: '۱۶:۳۰ - ۱۷:۳۰', activity: 'فیزیک (حل مسائل)' },
    { day: 'دوشنبه', time: '۱۷:۳۰ - ۱۸:۰۰', activity: 'استراحت' },
    { day: 'دوشنبه', time: '۱۸:۰۰ - ۱۹:۰۰', activity: 'ریاضی (حل مسائل چالش‌برانگیز)' },
    { day: 'سه‌شنبه', time: '۱۵:۳۰ - ۱۶:۰۰', activity: 'ریاضی (حل سوالات چالش‌برانگیز)' },
    { day: 'سه‌شنبه', time: '۱۶:۰۰ - ۱۶:۳۰', activity: 'استراحت' },
    { day: 'سه‌شنبه', time: '۱۶:۳۰ - ۱۷:۳۰', activity: 'شیمی (تمرین و تست)' },
    { day: 'سه‌شنبه', time: '۱۷:۳۰ - ۱۸:۰۰', activity: 'استراحت' },
    { day: 'سه‌شنبه', time: '۱۸:۰۰ - ۱۹:۰۰', activity: 'فیزیک (تمرین مسائل)' },
    { day: 'چهارشنبه', time: '۱۵:۳۰ - ۱۶:۰۰', activity: 'ریاضی (مرور مطالب)' },
    { day: 'چهارشنبه', time: '۱۶:۰۰ - ۱۶:۳۰', activity: 'استراحت' },
    { day: 'چهارشنبه', time: '۱۶:۳۰ - ۱۷:۳۰', activity: 'هندسه (تمرین و تست)' },
    { day: 'چهارشنبه', time: '۱۷:۳۰ - ۱۸:۰۰', activity: 'استراحت' },
    { day: 'چهارشنبه', time: '۱۸:۰۰ - ۱۹:۰۰', activity: 'شیمی (مطالعه مفاهیم)' }
];

// اجرای تبدیل
const outputSchedule = convertSchedule(inputSchedule);
console.log(outputSchedule);

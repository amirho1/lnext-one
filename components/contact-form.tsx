'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function ContactForm({ initialSubject }: { initialSubject?: string }) {
  const [subject, setSubject] = useState(
    ['event', 'schools', 'sponsors'].includes(initialSubject || '')
      ? initialSubject
      : 'general'
  )
  const [preview, setPreview] = useState(false)

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault()
        setPreview(true)
      }}
    >
      <p className="notice">
        نسخه نمایشی فرم: پیام‌ها ارسال یا ذخیره نمی‌شوند. اطلاعات تماس تأییدشده و اتصال فرم در نسخه اجرایی اضافه خواهند شد.
      </p>
      <div className="two-columns">
        <label>
          نام و نام خانوادگی (ضروری)
          <input required name="name" autoComplete="name" maxLength={100} placeholder="نام شما" />
        </label>
        <label>
          ایمیل برای پاسخ (ضروری)
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            dir="ltr"
            maxLength={200}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label>
        موضوع پیام
        <div className="select-wrapper">
          <select
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
              setPreview(false)
            }}
            name="subject"
          >
            <option value="general">پرسش عمومی</option>
            <option value="event">بوت‌کمپ نهمی‌ها — تهران، دی ۱۴۰۵</option>
            <option value="schools">همکاری مدرسه</option>
            <option value="sponsors">حمایت مالی و مشارکت</option>
          </select>
          <ChevronDown className="select-icon" size={17} aria-hidden="true" />
        </div>
      </label>
      {(subject === 'schools' || subject === 'sponsors') && (
        <label>
          نام مدرسه یا سازمان (اختیاری)
          <input name="organization" maxLength={150} autoComplete="organization" />
        </label>
      )}
      <label>
        متن پیام (ضروری)
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          placeholder="از سؤال یا پیشنهادتان برایمان بنویسید؛ حداقل ۱۰ حرف."
        />
      </label>
      <small className="footnote">لطفاً کد ملی، پرونده تحصیلی یا اطلاعات حساس را وارد نکنید.</small>
      <button type="submit" className="button primary">
        بررسی فرم نمایشی ←
      </button>
      {preview && (
        <p className="notice" role="status">
          فیلدهای ضروری تکمیل شده‌اند. این فقط پیش‌نمایش است؛ هیچ پیامی ارسال یا ذخیره نشده است و درخواستی ثبت نشده است.
        </p>
      )}
    </form>
  )
}


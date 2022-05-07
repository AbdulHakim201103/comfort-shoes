import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container bg-light rounded-3 p-5">
      <h1 className="text-center text-danger">Blog</h1>
      <div>
        <div className="bg-white rounded p-3">
          <h3 className="text-center text-success my-5">01. JavaScript এবং NodeJS এর মধ্যে পার্থক্য কি?</h3>
          <div className="d-flex p-3">
            <p className="me-3 w-50">
              JavaScript একটা প্রোগ্রামিং ভাষা।যা Websites এ Script লেখার জন্য ব্যবহার করা হয়।এটি
              মূলত ক্লাইন্ট সাইটে ব্যবহার করা হয়। JavaScript HTML যোগ করা এবং DOM এর সাথে play হতে
              সক্ষম।
            </p>
            <p className="ms-3 w-50">
              Node.js একটা JavaScript এর Runtime environment ।আমরা NodeJS এর সাহায্যে ব্রাউজার এর
              বাইরে JavaScript চালাইতে পারি।এটি বেশিরভাগ Sarver site এ ব্যবহার করা হয়। NodeJS এর
              HTML যোগ করার মতো সক্ষমতা নেই।
            </p>
          </div>
        </div>
        <div className="bg-white rounded p-3">
          <h3 className="text-center text-success my-5">02. SQL এবং NoSQL ডাটাবেসের মধ্যে পার্থক্য কি?</h3>
          <div className="d-flex p-3">
            <p className="me-3 w-50">
             SQL হলো একটি জনপ্রিয় ওপেন-সোর্স রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS) যা ওরাকল কর্পোরেশন তৈরি করেছে।My SQL এ প্রতিটা পৃথক রেকর্ড একটি টেবিলে rows হিসেবে সংরক্ষণ করে।
            </p>
            <p className="ms-3 w-50">
            একটি NoSQL মূলত নন এসকিউএল বা নন রিলেশনালকে উল্লেখ করে এমন একটি ডাটাবেস যা ডেটা সংরক্ষণ এবং পুনরুদ্ধারের জন্য একটি প্রক্রিয়া প্রদান করে।NoSQL ডাটাবেস দ্বারা ব্যবহৃত ডেটা স্ট্রাকচারগুলি রিলেশনাল ডাটাবেসে ডিফল্টভাবে ব্যবহৃত হওয়া থেকে ভিন্ন যা NoSQL-এ কিছু ক্রিয়াকলাপকে দ্রুত করে তোলে।এতে প্রতিটি রেকর্ড  documents হিসেবে সংরক্ষণ করা হয়।MongoDB একটি No SQL ডাটাবেস।
            </p>
          </div>
        </div>
        <div className="bg-white rounded p-3">
          <h3 className="text-center text-success my-5">03. JWT এর উদ্দেশ্য কি এবং এটি কিভাবে কাজ করে?</h3>
          <div className="d-flex p-3">
            <p className="me-3">
            JWT একটি এক ধরনের টোকেন যা ক্লাইন্ট সাইটে ও সার্ভার সাইড এর তথ্য ব্যবহার করার জন্য ব্যবহারকারী এর তথ্য  যাচাই-বাছাই করে।যদি ব্যবহারকারীর তথ্য মিলে যায় তাহলে ব্যবহার করতে দেয়। আর যদি না মিলে তাহলে তাকে Login অথবা Sign up এ নিয়ে যায়।এটি মূলত websites এর নিরাপত্তা নিশ্চিত করতে ব্যবহার করা হয়।এটিতে ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করা হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

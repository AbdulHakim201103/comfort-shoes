import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container bg-light rounded-3 p-5">
      <h1 className="text-center text-danger">Blog</h1>
      <div>
        <div className="">
          <h3 className="text-center text-success my-5">01. JavaScript এবং NodeJS এর মধ্যে পার্থক্য কি?</h3>
          <div className="d-flex p-3">
            <p className="me-3">
              JavaScript একটা প্রোগ্রামিং ভাষা।যা Websites এ Script লেখার জন্য ব্যবহার করা হয়।এটি
              মূলত ক্লাইন্ট সাইটে ব্যবহার করা হয়। JavaScript HTML যোগ করা এবং DOM এর সাথে play হতে
              সক্ষম।
            </p>
            <p className="ms-3">
              Node.js একটা JavaScript এর Runtime environment ।আমরা NodeJS এর সাহায্যে ব্রাউজার এর
              বাইরে JavaScript চালাইতে পারি।এটি বেশিরভাগ Sarver site এ ব্যবহার করা হয়। NodeJS এর
              HTML যোগ করার মতো সক্ষমতা নেই।
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-center text-success my-5">02. JWT এর উদ্দেশ্য কি এবং এটি কিভাবে কাজ করে?</h3>
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

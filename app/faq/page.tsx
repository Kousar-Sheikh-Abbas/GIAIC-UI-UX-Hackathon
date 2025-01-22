"use client";

import { useState } from "react";

export default function FAQ() {
  const [comment, setComment] = useState(""); // To manage user comments
  const [comments, setComments] = useState<string[]>([]); // Store all client comments

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]); // Add new comment to comments array
      setComment(""); // Clear the input field after submission
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">What is Foodtruck?</h3>
            <p>
              Foodtruck is an online platform that lets you explore and order from a variety of food trucks
              in your area. We provide real-time tracking and a seamless experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">How do I place an order?</h3>
            <p>
              To place an order, simply browse through the menu, select the items you want, and proceed to checkout. 
              You can pay using various payment methods including credit cards and PayPal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Can I track my order?</h3>
            <p>
              Yes! We provide real-time shipment tracking so you can keep an eye on your order's status.
            </p>
          </div>

          {/* Add more FAQ items here */}
        </div>
      </section>

      {/* Client Comments Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Client Comments</h2>
        
        {/* Comments Form */}
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <label htmlFor="comment" className="block text-lg mb-2">
            Leave a Comment or Question:
          </label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter your comment or question"
          />
          <button 
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Submit
          </button>
        </form>

        {/* Display Comments */}
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to leave a comment!</p>
          )}
        </div>
      </section>
    </div>
  );
}

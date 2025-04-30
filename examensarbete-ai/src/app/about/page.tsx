import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Om oss</h1>
        <p className="text-lg text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto laboriosam ea itaque alias aut nesciunt eligendi, aspernatur quisquam nisi cupiditate placeat ratione aliquam nemo eveniet dolor fuga, dignissimos quibusdam.
        </p>
      </div>
    </PageWrapper>
  );
}
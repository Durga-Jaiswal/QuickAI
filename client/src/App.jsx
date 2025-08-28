import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import WriteArticle from './pages/WriteArticle.jsx';
import RemoveBackground from './pages/RemoveBackground.jsx';
import ReviewResume from './pages/ReviewResume.jsx';
import GenerateImages from './pages/GenerateImages.jsx';
import BlogTitle from './pages/BlogTitle.jsx';
import RemoveObject from './pages/RemoveObject.jsx';
import Community from './pages/Community.jsx';
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="generate-image" element={<GenerateImages />} />
          <Route path="blog-title" element={<BlogTitle />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

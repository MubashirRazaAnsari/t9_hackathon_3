import Sidebar from '@/app/components/sidebar/Sidebar';

const BlogDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="w-full lg:w-2/3">
          {/* Your blog post content here */}
        </main>
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogDetailPage; 
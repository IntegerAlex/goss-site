import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { PostCard } from "./_components/post-card";

const PostsPage = () => {
  const Hero = () => {
    return (
      <div className="relative bg-primary w-full">
        <PageHeader>
          <PageHeaderHeading className="text-white">
            Latests Posts
          </PageHeaderHeading>
          <PageHeaderDescription className="text-primary-foreground">
            These are the latests posts on Gram
          </PageHeaderDescription>
        </PageHeader>
      </div>
    );
  };

  return (
    <div className="w-full flex-col justify-center items-center">
      <Hero />
      <div className="container relative flex flex-col gap-4 my-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default PostsPage;

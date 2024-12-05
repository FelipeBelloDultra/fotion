interface PageDetailProps {
  params: Promise<{
    pageId: string;
  }>;
}

export default async function PageDetail({ params }: PageDetailProps) {
  const { pageId } = await params;

  return <div>Page Detail: {pageId}</div>;
}

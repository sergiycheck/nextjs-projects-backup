import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description:
    'BaskTech - техніка Miele преміум-класу. Пральні та сушильні машини, посудомийні машини, холодильники, плити, духові шафи, кавоварки, пилососи та інше. Доставка по всій Україні.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1">
        <div className="mx-auto grid w-full md:grid-cols-12">
          <div className="px-4 pb-4 md:col-span-1 ">
            <Collections />
          </div>
          <div className="md:col-span-11">
            <ThreeItemGrid />
          </div>
        </div>

        <Suspense>
          <Carousel />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

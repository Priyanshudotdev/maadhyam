import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const MagazineAndNewsletterTab = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4 py-6">
      <Tabs
        defaultValue="magazine"
        className="w-full max-w-[90%] shadow-lg rounded-lg bg-white p-6"
      >
        {/* Tab List */}
        <TabsList className="flex w-full bg-gray-100 rounded-lg overflow-hidden">
          <TabsTrigger
            value="magazine"
            className="flex-1 py-3 text-lg font-semibold transition-all duration-300 ease-in-out data-[state=active]:bg-neutral-800 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            📖 Magazine
          </TabsTrigger>
          <TabsTrigger
            value="newsletter"
            className="flex-1 py-3 text-lg font-semibold transition-all duration-300 ease-in-out data-[state=active]:bg-neutral-800 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            📰 Newsletter
          </TabsTrigger>
        </TabsList>

        {/* Magazine Content */}
        <TabsContent value="magazine">
          <div className="w-full h-[95vh] rounded-lg overflow-hidden border shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://online.fliphtml5.com/pczxe/kszu/"
              frameBorder="0"
            ></iframe>
          </div>
        </TabsContent>

        {/* Newsletter Content */}
        <TabsContent value="newsletter">
          <div className="w-full h-[95vh] rounded-lg overflow-hidden border shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://online.fliphtml5.com/pczxe/wggg/"
              frameBorder="0"
            ></iframe>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MagazineAndNewsletterTab;

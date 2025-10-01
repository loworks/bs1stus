import React from "react";
import { getAllTags } from "@/Libs/contentful/api";

import TagNavigationModal from "./TagNavigationModal";
import { TransitionLink } from "@/Libs/Transitions";

export default async function TagNavigation({ preview }: { preview: boolean }) {
  const tags: any = await getAllTags(preview);

  const { groupedTags, groupNames } = tags.reduce(
    (
      acc: { groupedTags: Record<string, any[]>; groupNames: string[] },
      tag: any,
    ) => {
      if (!acc.groupedTags[tag.group]) {
        acc.groupedTags[tag.group] = [];
        acc.groupNames.push(tag.group);
      }
      acc.groupedTags[tag.group].push(tag);
      return acc;
    },
    { groupedTags: {}, groupNames: [] },
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* モバイル向け */}
      <TagNavigationModal groupedTags={groupedTags} groupNames={groupNames} />

      {/* デスクトップ向け（カテゴリサイドバー） */}
      <div className="hidden w-full md:flex md:space-x-12">
        {groupNames.map((group) => (
          <div key={group} className="mb-6">
            <h2 className="font-ob-nar">{group}</h2>
            <ul>
              {groupedTags[group].map((tag: any) => (
                <li key={tag.slug} className="text-lg leading-[1.2]">
                  <TransitionLink
                    href={`/${group.toLowerCase()}/${tag.slug}`}
                    useActiveLink={true}
                    className="font-und"
                  >
                    <span className="font-ob-nar-b"> {tag.name}</span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { FC } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

export interface GithubReposResultsProps {
  users?: any[];
}

export const GithubReposResults: FC<GithubReposResultsProps> = ({ users }) => {
  return (
    <div className="flex flex-col gap-4">
      {users?.map((user) => {
        return (
          <Disclosure key={user.id}>
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full items-center justify-between bg-gray-200 p-2 text-black">
                  <div>{user.login}</div>
                  <div className="size-4">
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </div>
                </DisclosureButton>

                <DisclosurePanel className="ml-10">
                  {user.repos.map((repo) => (
                    <div key={repo.id} className="mb-4 bg-gray-300 p-2">
                      <div className="flex items-center justify-between">
                        <div className="font-bold">{repo.name}</div>
                        <div className="flex items-center gap-1">
                          <div>{repo.stargazers_count}</div>
                          <div className="size-4">
                            <StarIcon />
                          </div>
                        </div>
                      </div>

                      {repo.description && (
                        <div className="mt-2">{repo.description}</div>
                      )}
                    </div>
                  ))}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

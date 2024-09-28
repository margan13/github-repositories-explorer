import { FC } from 'react';
import { useUpdateEffect } from 'react-use';
import { useSetAtom } from 'jotai';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, object } from 'zod';

import { Form } from 'src/components/Form';
import { SearchInput } from 'src/components/Input/SearchInput';
import { usernameAtom } from '../../App';

export interface GithubReposFinderFormModel {
  name: string;
}

const validationSchema = object({
  name: z.string().min(1, 'Please provide a username'),
});

const defaultValues = {
  name: '',
};

export interface GithubReposFinderProps {
  initialValue?: GithubReposFinderFormModel;
}

export const GithubReposFinder: FC<GithubReposFinderProps> = ({
  initialValue,
}) => {
  const setUsername = useSetAtom(usernameAtom);

  const form = useForm<GithubReposFinderFormModel>({
    resolver: zodResolver(validationSchema),
    defaultValues: initialValue ?? defaultValues,
  });

  useUpdateEffect(() => {
    form.reset(initialValue);
  }, [initialValue]);

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit((data) => setUsername(data.name))}
      className="mx-auto md:max-w-[50vw]"
    >
      <SearchInput name="name" disabled={form.formState.isSubmitting} />

      <Form.Submit disabled={form.formState.isSubmitting}>Search</Form.Submit>
    </Form>
  );
};

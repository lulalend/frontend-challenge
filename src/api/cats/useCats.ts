import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getAllCats } from './catsApi.ts';
import { Cat } from '../../types/types.ts';

export const useCats = () => {
  const { data, isLoading } = useQuery<Cat[], AxiosError>({
    queryKey: ['cats'],
    queryFn: () =>
      getAllCats().then((response) => response.data),
  });

  return { data, isLoading };
};

export const useInfCats = () => {
  const {
    data, isLoading, isFetchingNextPage, fetchNextPage
  } = useInfiniteQuery({
    queryKey: ['cats'],
    queryFn: () => getAllCats().then((response) => response.data),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.length === 15 ? lastPage.length : undefined,
  });

  return { data, isLoading, isFetchingNextPage, fetchNextPage };
};
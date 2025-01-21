import axios from 'axios';
import { getConfig, URL } from '../queryParam.ts';
import { Cat } from '../../types/types.ts';

export const getAllCats = () =>
  axios.get<Cat[]>(URL, getConfig());
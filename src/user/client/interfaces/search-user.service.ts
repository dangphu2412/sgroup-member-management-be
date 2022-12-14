import { UserManagementView } from '../types/user-management-view.types';
import { UserManagementQueryDto } from '../dtos/user-management-query.dto';
import { createInterfaceToken } from '../../../utils';
import { Page } from '@shared/query-shape/pagination/types';

export const SearchUserServiceToken = createInterfaceToken('SearchUserService');

export interface SearchUserService {
  search(query: UserManagementQueryDto): Promise<Page<UserManagementView>>;
}

import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick<
  LocalGithubUser,
  'name' | 'login' | 'created' | 'id'
> { }

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const UserTitle = ({created, login, name, id}: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));
  
  return (
    <div className={styles.userTitle} data-testid="UserTitle">
      <h2>{name}</h2>
      <h4>id:{id}</h4>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

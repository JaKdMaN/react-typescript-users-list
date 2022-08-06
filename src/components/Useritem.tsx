import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
	user: IUser;
	onclick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onclick }) => {
	return (
		<div onClick={() => onclick(user)} style={{ padding: '20px', border: '1px solid #000' }}>
			{user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
		</div>
	);
};

export default UserItem;
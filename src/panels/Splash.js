import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

const Splash = ({id, go, setModal, values, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader>Расписание ИИТ ЧелГУ</PanelHeader>
		<Group>
		{fetchedUser &&
			<Group>
				<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 80}}>
					{fetchedUser.photo_200 ? <Avatar size={100} src={fetchedUser.photo_200}/> : null}
					<Div style={{marginTop: 10}}><Header>Привет, {fetchedUser.first_name}</Header></Div>
				</div>
			</Group>}
			<Div>
				<Button size="xl" onClick={setModal} data-to="groupSelectorPage">
					Выбери группу
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Splash;
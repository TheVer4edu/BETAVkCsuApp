import React, {useState} from 'react';
import Config from '../Config';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon28GridSquareOutline from '@vkontakte/icons/dist/28/grid_square_outline';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import {PanelHeader, PanelHeaderContent, PanelHeaderContext, Epic, Tabbar, TabbarItem, Tooltip} from '@vkontakte/vkui';
import ringsJson from '../json/ringsJson';
import sheduleJson from '../json/sheduleJson';

const WEEK_SHIFT = Config["week_shift"];
const selectedItem = {borderLeft: "2px solid #4a76a8", backgroundColor: '#F0F0F033'};

const getWeekNumber = () => {
	let date = new Date(new Date().getTime());
	date.setHours(0, 0, 0, 0);
	// Thursday in current week decides the year.
	date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	// January 4 is always in week 1.
	var week1 = new Date(date.getFullYear(), 0, 4);
	// Adjust to Thursday in week 1 and count number of weeks from date to week1.
	return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
	                      - 3 + (week1.getDay() + 6) % 7) / 7);
}

const isWeekEven = () => {
	let shift = WEEK_SHIFT ? 1 : 0;
	return getWeekNumber() % 2 === shift;
}

const isCurrentLesson = (start, end) => {
	let nowTime = (new Date().getTime())	;
	let Time = new Date();
	Time.setHours(start.split(':')[0], start.split(':')[1]);
	let startTime = (Time.getTime());
	Time.setHours(end.split(':')[0], end.split(':')[1]);
	let endTime = (Time.getTime());
	return (startTime <= nowTime && nowTime <= endTime) ? selectedItem : null;
}

const Lesson = ({start, end, name, info}) => { return(
	<Cell style={isCurrentLesson(start, end)} before={<Cell style={{width: '85px'}} description={end}>{start}</Cell>} description={info}>
		{name}
	</Cell>)};
const Day = ({dayname, info, content}) => (
			<Cell><Card><Cell description={info}>{dayname}</Cell>
			<List>
				{content}
			</List></Card></Cell>); 
const DayInfo = ({count, begin, end}) => (<div>{count} пары с {begin} до {end}</div>);
const LessonInfo = ({hall, lecturer}) => (<div>Аудитория: {hall}<br/>Преподаватель: {lecturer}</div>);

const DayShedule = ({id, go, values, setModal, getVariable, fetchedUser}) => 
	{
		const [contextState, updateContext] = useState(false);
		const [evenWeek, setEvenWeek] = useState(isWeekEven());
		const rings = ringsJson;
		const shedule = sheduleJson;
		const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

		const today = () => {
			let date = new Date(new Date().getTime());
			return days[(date.getDay() + 6) % 7];
		}

		function toggleContext() {
			updateContext(!contextState);
		}

		function groupShedule() {
			let result = {'error': '404'};
			shedule.forEach((e) => {
				if(e['groupName'] === getVariable('group'))
					result = evenWeek ? e['even'] : e['odd'];
			});
			return result;
		}

		let week = groupShedule();
	return (<Panel
			id={id}>
			<PanelHeader
				left={<Div><Icon24Filter
							onClick={setModal}
							data-to="groupSelectorPage"/></Div>}>
				<PanelHeaderContent
					status={getVariable('group')}>
					{today()}
				</PanelHeaderContent>
				</PanelHeader>
				<Group>
					<List>
					{	
						week['error'] !== '404' ?
						(<Day
							dayname={week[today()].length !== 0 ?
										(<DayInfo 
											begin={rings[week[today()][0]['number']]['start']} 
											end={rings[week[today()][week[today()].length - 1]['number']]['end']} 
											count={week[today()].length}/>) :
										(<div>В этот день пар нет :)</div>)
									}
								content={
							week[today()] !== [] &&
							(Array.isArray(week[today()]) &&
								week[today()].map(
									(e) => {
										return (<Lesson 
											start={rings[e['number']]['start']} 
											end={rings[e['number']]['end']} 
											name={e['name']} 
											info={<LessonInfo hall={e['hall']} lecturer={e['lecturer']}/>}/>
											);} )
							)
							}/>)
						 :
						(
							getVariable('group') !== '' ? 
								(<Cell><Div>Расписания на эту группу пока нет</Div></Cell>) :
								(<Group>
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
									</Group>)
						)
					}
					</List>
				</Group>
				<Epic tabbar={
					<Tabbar>
						<TabbarItem 
							selected={true}
							text="Сегодня">
							<Icon28GridSquareOutline/>
						</TabbarItem>
						<TabbarItem
							text="Неделя"
							onClick={() => go('sheduleSheet')}>
							<Icon28Newsfeed/>
						</TabbarItem>
					</Tabbar>
				}/>
	</Panel>);}

export default DayShedule;
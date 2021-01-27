import React, {useState} from 'react';
import Config from '../Config';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
//import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon28GridSquareOutline from '@vkontakte/icons/dist/28/grid_square_outline';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import {PanelHeader, PanelHeaderContent, PanelHeaderContext, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import ringsJson from '../json/ringsJson';
import sheduleJson from '../json/sheduleJson';

const WEEK_SHIFT = Config["week_shift"];

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

const Lesson = ({start, end, name, info}) => { return(
	<Cell before={<Cell description={end} style={{width: '85px'}}>{start}</Cell>} description={info}>
		{name}
	</Cell>)};
const Day = ({dayname, info, content}) => (
			<Cell><Card><Cell description={info}>{dayname}</Cell>
			<List>
				{content}
			</List></Card></Cell>); 
const DayInfo = ({count, begin, end}) => (<div>{count} пары с {begin} до {end}</div>);
const LessonInfo = ({hall, lecturer}) => (<div>Аудитория: {hall}<br/>Преподаватель: {lecturer}</div>);

const SheduleSheet = ({id, go, values, setModal, getVariable}) => 
	{
		const [contextState, updateContext] = useState(false);
		const [evenWeek, setEvenWeek] = useState(isWeekEven());
		const rings = ringsJson;
		const shedule = sheduleJson;
		const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

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
					onClick={() => toggleContext()}
					status={evenWeek ? (<div>вторая неделя</div>) : (<div>первая неделя</div>)}
					aside={<Icon16Dropdown style={{ transform: `rotate(${contextState ? '180deg' : '0'})` }}/>}>
					Группа {getVariable('group')}
				</PanelHeaderContent>
				</PanelHeader>
				<PanelHeaderContext opened={contextState}>
					<List>
						<Cell 
							before={!isWeekEven() ? (<Icon16Fire/>) : (<Div/>)}
							onClick={() => {
								setEvenWeek(false);
								toggleContext();
							}
						}>Первая неделя</Cell>
						<Cell 
							before={isWeekEven() ? (<Icon16Fire/>) : (<Div/>)}
							onClick={() => {
								setEvenWeek(true)
								toggleContext();
							}
						}>Вторая неделя</Cell>
					</List>
				</PanelHeaderContext>
				<Group>
					<List>
					{	
						week['error'] !== '404' ?
						(days.map(z => { return(<Day 
								info={week[z].length !== 0 ?
										(<DayInfo 
											begin={rings[week[z][0]['number']]['start']} 
											end={rings[week[z][week[z].length - 1]['number']]['end']} 
											count={week[z].length}/>) :
										(<div>В этот день пар нет :)</div>)
									} 
								dayname={z} 
								content={
							week[z] !== [] &&
							(Array.isArray(week[z]) &&
								week[z].map(
									(e) => {
										return (<Lesson 
											start={rings[e['number']]['start']} 
											end={rings[e['number']]['end']} 
											name={e['name']} 
											info={<LessonInfo hall={e['hall']} lecturer={e['lecturer']}/>}/>
											);} )
							)
							}/>)
						})) :
						(
							<Cell><Div>Расписания на эту группу пока нет	</Div></Cell>
						)
					}
					</List>
				</Group>
				<Epic tabbar={
					<Tabbar>
						<TabbarItem 
							text="Сегодня"
							onClick={() => go('dayShedule')}>
							<Icon28GridSquareOutline/>
						</TabbarItem>
						<TabbarItem
							selected={true}
							text="Неделя">
							<Icon28Newsfeed/>
						</TabbarItem>
					</Tabbar>
				}/>
				<br/>
				<br/>
	</Panel>);}

export default SheduleSheet;
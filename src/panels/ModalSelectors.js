import React, { useState } from 'react';
//import connect from '@vkontakte/vk-connect';
//import PropTypes from 'prop-types';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import {ModalRoot, ModalPage, ModalPageHeader, FormLayout, SelectMimicry, FormLayoutGroup, Radio, PanelHeaderBack} from '@vkontakte/vkui';

	const directionList = ['Программная инженерия', 'Бизнес-информатика'];
	const coursesList = ['1', '2', '3', '4'];
	const groupsList = ['ПрИ-101', 'ПрИ-102', 'ПрИ-103', 'БИ-101', 'ПрИ-201', 'ПрИ-202', 'БИ-201', 'ПрИ-301', 'БИ-301', 'ПрИ-401', 'БИ-401'];

	const ModalGroupSelector = ({go, values, getVariable,setVariable, modal, updateModal, modalBack, closeModal}) => {
		const [directionValue, setDirectionValue] = useState(values ? getVariable('direction') : '');
		const [courseValue, setCourseValue] = useState(values ? getVariable('course') : '');
		const [groupValue, setGroupValue] = useState(values ? getVariable('group') : '');

		function storeData() {
			setVariable('direction', directionValue);
			setVariable('course', courseValue);
			setVariable('group', groupValue);
			closeModal();
			go("dayShedule");
		}

		return(
			<ModalRoot activeModal={modal}>
			<ModalPage
				id="groupSelectorPage"
				header={
					<ModalPageHeader
						left={<PanelHeaderBack onClick={() => modalBack()}/>}>
						Давайте всё настроим :)
					</ModalPageHeader>
				}
				onClose={
					() => closeModal()
				}>
				<FormLayout>
					<SelectMimicry top="Направление" placeholder="Выбрать направление" onClick={() => updateModal('direction')}>{directionValue}</SelectMimicry>
					<SelectMimicry top="Кyрс" placeholder="Выбрать курс" onClick={() => updateModal('course')}>{courseValue}</SelectMimicry>
					<SelectMimicry top="Группа" placeholder="Выбрать группу" onClick={() => updateModal('group')}>{groupValue}</SelectMimicry>
					<Button
						disabled={groupValue == ''} 
						size="xl" 
						onClick={() => storeData() } 
						>Погнали</Button>
				</FormLayout>
			</ModalPage>

			<ModalPage
				id="direction"
				header={
					<ModalPageHeader
						left={<PanelHeaderBack onClick={() => modalBack()}/>}>
						Выберите направление
					</ModalPageHeader> //direction
				}
				onClose={
					() => modalBack()
				}
			>
				<FormLayoutGroup>
					{
						directionList.map(
							(title, id) => {
								return (
									<Radio key={id} name="direction" value={id} onClick={()=> {setDirectionValue(title); modalBack();}}>{title}</Radio>
								);
							}
						)
					}
				</FormLayoutGroup>
			</ModalPage>

			<ModalPage
				id="course"
				header={
					<ModalPageHeader
						left={<PanelHeaderBack onClick={() => modalBack()}/>}>
						Выберите курс
					</ModalPageHeader> //course
				}
				onClose={
					() => modalBack()
				}
			>
				<FormLayoutGroup>
					{
						coursesList.map(
							(title, id) => {
								return (
									<Radio key={id} name="direction" value={id} onClick={()=> { setCourseValue(title); modalBack();}}>{title}</Radio>
								);
							}
						)
					}
				</FormLayoutGroup>
			</ModalPage>

			<ModalPage
				id="group"
				header={
					<ModalPageHeader
						left={<PanelHeaderBack onClick={() => modalBack()}/>}>
						Выберите группу
					</ModalPageHeader> //group
				}
				onClose={
					() => modalBack()
				}
			>
				<FormLayoutGroup>
					{
						groupsList.map(
							(title, id) => {
								return (
									<Radio key={id} name="direction" value={id} onClick={()=> { setGroupValue(title); modalBack();}}>{title}</Radio>
								);
							}
						)
					}
				</FormLayoutGroup>
			</ModalPage>
		</ModalRoot>
	);
}
export default ModalGroupSelector;
import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Splash from './panels/Splash';
import ModalSelectors from './panels/ModalSelectors';
import SheduleSheet from './panels/SheduleSheet';
import DayShedule from './panels/DayShedule';
import Home from './panels/Home';

const App = () => {

 const [activePanel, setActivePanel] = useState('dayShedule');
 const [fetchedUser, setUser] = useState(null);
 const [popout, setPopout] = useState(null);
 const [modal, updateModal] = useState(null);
 const [modalHistory, updateModalHistory] = useState([]);
 const [values, updateValues] = useState(null);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			} else if (type === "VKWebAppStorageGetResult") {
				console.log("[Connect] Updating values OK");
			}
		});
		async function fetchData() {
			const user = await connect.send('VKWebAppGetUserInfo');
			const val = await connect.send("VKWebAppStorageGet", {"keys": ['direction', 'course', 'group']});
			setUser(user);
			setPopout(null);
			updateValues(val['keys']);
		}
		fetchData();
	}, []);

	const go = e => {
		if(typeof e != 'string')
			setActivePanel(e.currentTarget.dataset.to);
		setActivePanel(e);
	};

	const setOneModal = (value) => {
		value = value || null;
		let currModalHistory = modalHistory ? [...modalHistory] : [];
		if(value === null) {
			currModalHistory = [];
		} else if(currModalHistory.indexOf(value) !== -1) {
			currModalHistory = currModalHistory.splice(
				0,
				currModalHistory.indexOf(value) + 1);
		} else {
			currModalHistory.push(value);
		}
		updateModal(value);
		updateModalHistory(currModalHistory);
	}

	const modalBack = () => 
		setOneModal(modalHistory[modalHistory.length - 2]);

	const closeModal = () =>
		setOneModal(null);
	

	const setModalFrom = (e) => {
		setOneModal(e.currentTarget.dataset.to);
	};

	function setVariable(name, value) {
		connect.send(
			"VKWebAppStorageSet",
			{
				'key': name,
				'value': value
			});
		const val = values;
		val.forEach(
				(elem) => {
					if(elem['key'] === name) elem['value'] = value;
				}
			);
		updateValues(val);
	}

	function getVariable(name) {
		let value = '';
		if(!values) return false;
		values.forEach((dict) => {
			if(dict['key'] === name)
				value = dict['value'];
			});
		return value;
	}

	return (
		<View activePanel={activePanel} popout={popout} modal={<ModalSelectors values={values} getVariable={getVariable} setVariable={setVariable} go={go} modal={modal} updateModal={setOneModal} modalBack={modalBack} closeModal={closeModal}/>}>
			<Splash id='splash' go={go}	setModal={setModalFrom} values={values} fetchedUser={fetchedUser}/>
			<SheduleSheet id='sheduleSheet' go={go} values={values} setModal={setModalFrom} getVariable={getVariable}/>
			<DayShedule id='dayShedule' go={go} values={values} setModal={setModalFrom} getVariable={getVariable} fetchedUser={fetchedUser}/>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
		</View>
	);
}

export default App;


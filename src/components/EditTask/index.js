import React, { useEffect, useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style.js";

export default function EdiTask({ visible, taskData, onSave, onClose }) {
	const [currentTask, setCurrentTask] = useState(taskData);

	useEffect(() => {
		setCurrentTask(taskData);
	}, [taskData]);

	return (
		<Modal
			visible={visible}
			animationType="fade">
			<View style={styles.modal}>
				<Text style={styles.title}>
					Editar tarefa
				</Text>
				<TextInput
					value={currentTask?.title}
					style={styles.input}
					onChangeText={t => setCurrentTask({
						...currentTask, title: t
				})}/>
				<TextInput
					value={currentTask?.description}
					style={styles.input}
					onChangeText={t => setCurrentTask({
						...currentTask, description: t
				})}/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onSave(currentTask)}>
					<Text>Atualizar tarefa</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={onClose}>
					<Text>Voltar</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
}

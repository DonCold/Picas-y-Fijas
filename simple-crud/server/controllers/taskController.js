import Task from '../models/tasks';

export const getTasks = async ( _req, res ) => {
	const tasks = await Task.find();
	res.status(200).json(tasks);
};

export const createTask = async ( req, res ) => {
	const task = new Task(req.body);
	await task.save();

	res.status(200).json(task);
}

export const editTask = async ( req, res ) => {
	const { id } = req.params;
	const { title, desc } = req.body;
	let error = false;

	const editNote = await Task.findByIdAndUpdate(id, { title, desc }, { new: true })
		.catch( () => {
			error = true;
		} );

	if ( !editNote || error ) {
		res.status( 404 ).json( { error: 'La Nota no existe' } );
	} else {
		res.status( 200 ).json(editNote);
	}
};

export const deleteTask = async ( req, res ) => {
	const { id } = req.params;
	let error = false;

	const deleteNote = await Task.findByIdAndDelete(id)
		.catch( () => {
			error = true;
		} );

	if ( !deleteNote || error ) {
		res.status( 404 ).json( { error: 'La Nota no existe' } );
	} else {
		res.status( 200 ).json( deleteNote );
	}
};

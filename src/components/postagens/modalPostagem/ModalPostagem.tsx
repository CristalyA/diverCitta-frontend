import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, Button, Box } from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';
import './ModalPostagem.css';
import CadastroPostagem from './../cadastroPostagem/CadastroPostagem';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: 500,
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: 'none',
			padding: theme.spacing(2, 4, 3),
		},
	}),
);

function ModalPostagem() {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<Box display="flex" justifyContent="flex-end" className="cursor">
				<CloseIcon onClick={handleClose} />

			</Box>

			<CadastroPostagem />

		</div>
	);

	return (
		<div  className='configBotao11'>
			<Button className="botao11" onClick={handleOpen}>Nova Postagem</Button>
			<Modal
				open={open} onClose={handleClose} aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{body}
			</Modal>
		</div>
	);
}
export default ModalPostagem;
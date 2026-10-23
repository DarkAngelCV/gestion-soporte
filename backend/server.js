const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Comprobar conexión y consultar tickets
app.get('/', (req, res) => {
    res.send('Servidor de Gestión de Soporte Técnico funcionando');
});

// Obtener todos los tickets
app.get('/api/tickets', (req, res) => {
    db.query('SELECT * FROM tickets ORDER BY id DESC', (error, resultados) => {
        if (error) {
            return res.status(500).json({ mensaje: 'Error al obtener los tickets' });
        }

        res.json(resultados);
    });
});

// Crear un nuevo ticket
app.post('/api/tickets', (req, res) => {
    const {
        asunto,
        solicitante,
        descripcion,
        categoria,
        prioridad
    } = req.body;

    const sql = `
        INSERT INTO tickets
        (asunto, solicitante, descripcion, categoria, prioridad)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [asunto, solicitante, descripcion, categoria, prioridad],
        (error, resultado) => {
            if (error) {
                return res.status(500).json({
                    mensaje: 'Error al crear el ticket'
                });
            }

            res.status(201).json({
                mensaje: 'Ticket creado correctamente',
                id: resultado.insertId
            });
        }
    );
});

// Actualizar un ticket
app.put('/api/tickets/:id', (req, res) => {
    const { id } = req.params;
    const {
        asunto,
        solicitante,
        descripcion,
        categoria,
        prioridad,
        estado
    } = req.body;

    const sql = `
        UPDATE tickets
        SET asunto = ?,
            solicitante = ?,
            descripcion = ?,
            categoria = ?,
            prioridad = ?,
            estado = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [asunto, solicitante, descripcion, categoria, prioridad, estado, id],
        (error, resultado) => {
            if (error) {
                return res.status(500).json({
                    mensaje: 'Error al actualizar el ticket'
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensaje: 'Ticket no encontrado'
                });
            }

            res.json({
                mensaje: 'Ticket actualizado correctamente'
            });
        }
    );
});

// Eliminar un ticket
app.delete('/api/tickets/:id', (req, res) => {
    const { id } = req.params;

    db.query(
        'DELETE FROM tickets WHERE id = ?',
        [id],
        (error, resultado) => {
            if (error) {
                return res.status(500).json({
                    mensaje: 'Error al eliminar el ticket'
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensaje: 'Ticket no encontrado'
                });
            }

            res.json({
                mensaje: 'Ticket eliminado correctamente'
            });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

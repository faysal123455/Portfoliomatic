import { getArchivment, createOneArchivment, updateOneArchivment, deleteOneArchivment } from "../repositories/archivmentRepo.js";

const archivments = (req, res) => {
    getArchivment().then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for archivment",
            data: data,
        });
    })
}

const createArchivment = ( req, res) => {
    console.log(req.body);
    createOneArchivment(req.body).then(data => {
        return res.status(200).json({
            status:200,
            message: "all good for archivment",
            data: data,
        });
    })
}

const updateArchivment = (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    updateOneArchivment(id, newData)
        .then(data => {
            return res.status(200).json({
                status: 200,
                message: "Archivment updated successfully",
                data: data,
            });
        })
        .catch(error => {
            return res.status(500).json({
                status: 500,
                message: "Error updating archivment",
                error: error,
            });
        });
};

const deleteArchivment = (req, res) => {
    const { id } = req.params;

    deleteOneArchivment(id)
        .then(data => {
            return res.status(200).json({
                status: 200,
                message: "Archivment deleted successfully",
                data: data,
            });
        })
        .catch(error => {
            return res.status(500).json({
                status: 500,
                message: "Error deleting archivment",
                error: error,
            });
        });
};

export { archivments, createArchivment, updateArchivment, deleteArchivment }

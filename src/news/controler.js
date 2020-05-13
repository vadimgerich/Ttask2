import News from "./model";

const newsControler = {
    async get(req, res) {
        try {
            const list = await News.find(req.query);            
            res.send(list);
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

export default newsControler;
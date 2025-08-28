const express = require("express"); 
const router = new express.Router();

const TicketRouter = require('./ticket-route');
const AtendenteRouter = require('./atendente-route');
const RegistroRouter = require('./registro-route');

router.get('/', (req, res) => {
  res.json({
    message: "API no ar",
    endpoints: {
      tickets: "/tickets",
      atendentes: "/atendentes",
      registros: "/registros",
      health: "/health",
    },
  });
});

router.get('/health', (req, res) => {
  res.json({
    status: "Ok",
    timestamp: new Date().toISOString(),
  });
});

router.use('/tickets', TicketRouter);
router.use('/atendentes', AtendenteRouter);
router.use('/registros', RegistroRouter);

module.exports = router;

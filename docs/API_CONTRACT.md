\# RainIntel API Contract



Version: 1.0  

Status: Draft for Backend Development



\---



\# 1. Purpose



This document defines the common API contract for the RainIntel backend.



All backend services and frontend integration must follow this contract.



The three backend members must not independently change endpoint names,

request formats, response formats, or field names without team agreement.



\---



\# 2. Architecture



```text

React Frontend

&#x20;     |

&#x20;     v

API Gateway

&#x20;     |

&#x20;     +------------------+

&#x20;     |                  |

&#x20;     v                  v

Auth Service       Assessment Service

&#x20;                        |

&#x20;                        +------> Location/GIS

&#x20;                        |

&#x20;                        +------> Rainfall

&#x20;                        |

&#x20;                        +------> Soil

&#x20;     |

&#x20;     v

RWH Service

&#x20;     |

&#x20;     +------> ML Service

&#x20;     |

&#x20;     v

Oracle Database


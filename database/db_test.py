
from models import *
from database import *
from database_access import *

#Can query model objects directly for database results. 

DAC = database_access()

DAC.clear_database()

print (DAC.get_all_scores())

print (DAC.get_all_maps())

print (DAC.get_all_passwords())





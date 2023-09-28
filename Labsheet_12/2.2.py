from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://technotrail.site")

register_button = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.LINK_TEXT, "Register")))
register_button.click()


name_field = driver.find_element(By.ID, "name")
email_field = driver.find_element(By.NAME, "email")
password_field = driver.find_element(By.XPATH, "//input[@type='password']")
confirm_password_field = driver.find_element(By.XPATH, "//input[@name='password_confirmation']")

name_field.send_keys("Lasith Ranahewa")
email_field.send_keys("lasithranahewa@gmail.com")
password_field.send_keys("p@ssword123")
confirm_password_field.send_keys("p@ssword123")


register_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
register_button.click()

success_message = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='alert alert-success']")))

driver.quit()
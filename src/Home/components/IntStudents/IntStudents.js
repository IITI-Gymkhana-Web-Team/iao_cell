import React from "react";
import { Table } from "react-bootstrap";

export const IntStudents = () => {
	return (
		<div className="container">
			<h1 className="pt-4 mainTitle text-center mb-5">Degree & Exchange International Students</h1>
			<h2 className="font-acme">PhD</h2>
			<Table striped bordered hover variant="primary" responsive className="mb-3">
				<thead>
					<tr>
						<th>Year</th>
						<th>Student</th>
						<th>Course</th>
						<th>Country</th>
						<th>Admitted through</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2021</td>
						<td>Mr. Asrul Munazar</td>
						<td>Ph.D. (HSS)</td>
						<td>Indonesia</td>
						<td>ASEAN</td>
					</tr>
					<tr>
						<td>2020</td>
						<td>Mr. Son Thanh Ngo*</td>
						<td>Ph.D. (HSS)</td>
						<td>Vietnam</td>
						<td>ASEAN</td>
					</tr>
					<tr>
						<td>2020</td>
						<td>Ms. Huynh Vuong Uyen Thy*</td>
						<td>Ph.D. (HSS)</td>
						<td>Vietnam</td>
						<td>ASEAN</td>
					</tr>
				</tbody>
			</Table>
			<p>* Withdrawn admission due to personal reasons.</p>
			<h2 className="font-acme mt-5">Masters</h2>
			<Table striped bordered hover variant="primary" responsive className="mb-3">
				<thead>
					<tr>
						<th>Year</th>
						<th>Student</th>
						<th>Course</th>
						<th>Country</th>
						<th>Admitted through</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2021-23</td>
						<td>Mr. Sumantra Aarya</td>
						<td>M.Tech. (PIE)</td>
						<td>Nepal</td>
						<td>ISF (International Self-Financed)</td>
					</tr>
					<tr>
						<td>2020-22</td>
						<td>Mr. Musa Alhassan Shittu</td>
						<td>M.Tech. (MSD)</td>
						<td>Nigeria</td>
						<td>Study In India</td>
					</tr>
					<tr>
						<td>2019-21</td>
						<td>Mr. Pravin Karna</td>
						<td>MS Research - ME</td>
						<td>Nepal</td>
						<td>Study In India</td>
					</tr>
					<tr>
						<td>2018-20</td>
						<td>Mr. Sudipta Das</td>
						<td>M.Tech. (EE)</td>
						<td>Bangladesh</td>
						<td>Study In India</td>
					</tr>
					<tr>
						<td>2018-20</td>
						<td>Mr. Sumit Kumar Gupta</td>
						<td>M.Tech. (ME)</td>
						<td>Nepal</td>
						<td>Study In India</td>
					</tr>
				</tbody>
			</Table>
			<h2 className="font-acme mt-5">Bachelors</h2>
			<Table striped bordered hover variant="primary" responsive className="mb-5">
				<thead>
					<tr>
						<th>Year</th>
						<th>Student</th>
						<th>Course</th>
						<th>Country</th>
						<th>Duration</th>
						<th>Admitted through</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2019-20</td>
						<td>Mr. Pongnut Panichakul</td>
						<td>HSS-Indian Studies</td>
						<td>Thailand</td>
						<td>Spring Semester</td>
						<td>Exchange Program</td>
					</tr>
					<tr>
						<td>2019-20</td>
						<td>Ms. Pisinee Nethin</td>
						<td>HSS-Indian Studies</td>
						<td>Thailand</td>
						<td>Spring Semester</td>
						<td>Exchange Program</td>
					</tr>
					<tr>
						<td>2019-20</td>
						<td>Ms. Wachiraya Udomvorakulchai</td>
						<td>HSS-Indian Studies</td>
						<td>Thailand</td>
						<td>Spring Semester</td>
						<td>Exchange Program</td>
					</tr>
					<tr>
						<td>2019-20</td>
						<td>Mr. Rattasorn Pongpitakkul</td>
						<td>HSS-Indian Studies</td>
						<td>Thailand</td>
						<td>Spring Semester</td>
						<td>Exchange Program</td>
					</tr>
					<tr>
						<td>2019-20</td>
						<td>Mr. Premsub Duangprem</td>
						<td>HSS-Indian Studies</td>
						<td>Thailand</td>
						<td>Spring Semester</td>
						<td>Exchange Program</td>
					</tr>
					<tr>
						<td>2019-20</td>
						<td>Mr. Thanasak Janthana</td>
						<td>HSS-Indian Studies</td>
						<td>Thailand</td>
						<td>Spring Semester</td>
						<td>Exchange Program</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

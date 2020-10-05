import { NextApiRequest, NextApiResponse } from "next";

import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

// // Fetching all GDG organization members on Github
// async function fetchMembers(token: string | null){
//   return fetch('https://api.github.com/orgs/gdgjf/members', {
//     headers: {
//       Authorization: `token ${token}`
//     }
//   })
//   .then(resp => resp.json());
// }

// // Fetching all GDG Contributors on Github
// async function fetchContributors(token: string | null){
//   let allContributors: any[] = [];
//   const repos = await fetch('https://api.github.com/orgs/gdgjf/repos', {
//     headers: {
//       Authorization: `token ${token}`,
//       Accept: "application/vnd.github.v3+json"
//     }
//   })
//   .then(resp => resp.json());
//   if(repos){
//     for(const repo of repos){
//       await fetch(`https://api.github.com/repos/gdgjf/${repo.name}/contributors`,{
//         headers: {
//           Authorization: `token ${token}`,
//           Accept: "application/vnd.github.v3+json"
//         }
//       })
//         .then(resp => resp.json())
//         .then(contributorsPerRepo => {
//           contributorsPerRepo.forEach((contributor:any) => {
//             if(!allContributors.some(obj => obj.login === contributor.login)){
//               allContributors.push(contributor);
//             }
//           })
//         })
//     }
//     return allContributors;
//   }
// }

// // Getting the role based on which list user is inside
// function getUserRole(user: any, organizationMembers: any[], contributors: any[]) {
//   if(organizationMembers.some((obj: any) => obj.login === user.login)){
//     return ["Embaixador", "Organizador", "Mentor", "Apoiador", "Participante"];
//   }
//   else if(contributors.some((obj: any) => obj.login === user.login)){
//     return ["Mentor", "Apoiador"];
//   }
//   else{
//     return ["Participante"];
//   }
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(!req.body) return;
  await runMiddleware(req, res, cors);

  const { client_id, client_secret, code, redirect_uri } = req.body;
  fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id, 
      client_secret, 
      code, 
      redirect_uri 
    })
  })
  .then(response => response.text())
  .then(async response => {
    let params = new URLSearchParams(response);
    try {
      const access_token = params.get('access_token');
      const scope = params.get('scope');
      return fetch(`https://api.github.com/user?scope=${scope}`,{
        headers: {
          Authorization: `token ${access_token}`
        }
      })
      .then(resp => resp.json())
      .then(user => {
        
        //* Dinamic fetching almost complete, just missing collaborators
        // const organizationMembers: Array<any> = await fetchMembers(access_token!);
        // const contributors: any[] | undefined = await fetchContributors(access_token!);
        // const roles = getUserRole(user, organizationMembers, contributors!);

        const members = ['tiagogouvea', 'lesleyandrez', 'Francila', 'fnnrodrigo'];
        const contributors = ['gb78', 'ravaiano', 'jfbaraky', 'macanhajc', 'atilabraga', 'Vini98br', 'fbvictorhugo'];
        const ambassadors = ['RamonXavier', 'rbrasill', 'JosiasSalermo', 'Gpimentel7']; 

        let roles;
        if(members.includes(user.login)){
          roles = ["Organizador", "Mentor"];
        }
        else if(contributors.includes(user.login)){
          roles = ["Apoiador", "Mentor"]
        }
        else if (ambassadors.includes(user.login)){
          roles = ["Embaixador"];
        }
        else{
          roles = ["Participante"];
        }

        return res
          .status(200)
          .send({
            avatar_url: user.avatar_url,
            bio: user.bio,
            blog: user.blog,
            html_url: user.html_url,
            id: user.id,
            login: user.login,
            name: user.name,
            node_id: user.node_id,
            url: user.url,
            roles
          });
      })
      .catch((error) => res.status(400).json(error));
    } catch (e) {
      return res.status(400).json(e);
    }
  });      
}